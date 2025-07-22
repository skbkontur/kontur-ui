const BASE_URL = "https://ui.gitlab-pages.kontur.host";
const STORYBOOK_VERSIONS_URL = `${BASE_URL}/docs/storybook/versions.json`;
const STORYBOOK_DOCUMENTATION_URL = `${BASE_URL}/storybook-documentation/index.json`;
const ICON_URL =
  "https://s.kontur.ru/common-v2/icons-ui/black/tool-pencil-square/tool-pencil-square-24-Regular.svg";
const EDIT_ITEM_CLASS = "edit-item";
const HIGHLIGHTED_REF_ID_ATTR = "data-highlighted-ref-id";
const HIGHLIGHTED_ITEM_ID_ATTR = "data-highlighted-item-id";
const VERSION_REGEXP = /^\d+\.\d+\.\d+$/;

const editLinkStyles = `
  .${EDIT_ITEM_CLASS} {
    position: fixed;
    right: 24px;
    bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid rgba(0,0,0,.09);
    border-radius: 8px;
    background:rgba(245, 245, 245, 1);
    cursor: pointer;
    transition: .15s ease;
    user-selection: none;
  }

  .${EDIT_ITEM_CLASS}:hover {
    background:rgba(240, 240, 240, 1);
  }

  .${EDIT_ITEM_CLASS}:active {
    background:rgba(235, 235, 235, 1);
  }

  .${EDIT_ITEM_CLASS}:before {
    content: 'Редактировать на GitLab';
    position: absolute;
    top: calc(50% - 15px);
    right: calc(100% + 8px);
    padding: 8px;
    border-radius: 6px;
    background: rgba(0,0,0,.75);
    color: white;
    font-size: 14px;
    line-height: 1;
    opacity: 0;
    pointer-events: none;
    transition: .15s ease opacity;
  }

  .${EDIT_ITEM_CLASS}:hover:before {
    opacity: 1;
  }
`;

function parseVersion(version) {
  const match = version.match(VERSION_REGEXP);
  return match ? match[0].split(".").map(Number) : [Infinity];
}

function sortVersions(a, b) {
  const splitA = parseVersion(a);
  const splitB = parseVersion(b);

  for (let i = 0; i < Math.max(splitA.length, splitB.length); i++) {
    if (splitA[i] < splitB[i]) return 1;
    if (splitA[i] > splitB[i]) return -1;
  }
  return a.localeCompare(b);
}

const openGitIDE = (packageName, path) => {
  let url;
  if (packageName === "react-ui" || packageName === "react-ui-validations") {
    url = `https://git.skbkontur.ru/-/ide/project/ui/react-ui/edit/master/-/packages/${packageName}/${path}`;
  } else if (packageName === "storybook_internal") {
    url = `https://git.skbkontur.ru/-/ide/project/ui/storybook-documentation/edit/master/-/${path}`;
  } else {
    url = `https://git.skbkontur.ru/-/ide/project/ui/ui-parking-2/edit/master/-/${path}`;
  }
  window.open(url, "_blank");
};

fetch(STORYBOOK_VERSIONS_URL)
  .then((response) => response.json())
  .then((versions) => {
    const editLink = document.createElement("div");
    editLink.innerHTML = `
      <style>${editLinkStyles}</style>
      <div class="${EDIT_ITEM_CLASS}">
        <img src="${ICON_URL}" alt="Edit" />
      </div>
    `;

    const onClick = async () => {
      const packageNameElement = document.querySelector(
        `[${HIGHLIGHTED_REF_ID_ATTR}]`,
      );
      const idElement = document.querySelector(`[${HIGHLIGHTED_ITEM_ID_ATTR}]`);

      if (!packageNameElement || !idElement) {
        console.error("Could not find highlighted elements.");
        return;
      }

      const packageName = packageNameElement.getAttribute(
        HIGHLIGHTED_REF_ID_ATTR,
      );
      const id = idElement.getAttribute(HIGHLIGHTED_ITEM_ID_ATTR);

      try {
        if (packageName === "storybook_internal") {
          const response = await fetch(STORYBOOK_DOCUMENTATION_URL);
          const data = await response.json();
          const path = data.entries[id].importPath;
          openGitIDE(packageName, path);
        } else {
          const latestVersion = versions[packageName]
            .filter((v) => v.match(VERSION_REGEXP))
            .sort(sortVersions)
            .at(0);

          if (!latestVersion) {
            console.error(`No version found for package: ${packageName}`);
            return;
          }

          const storybookMetaUrl = `${BASE_URL}/docs/storybook/${packageName}/${latestVersion}/index.json`;
          const response = await fetch(storybookMetaUrl);
          const data = await response.json();
          const path = data.entries[id].importPath;
          openGitIDE(packageName, path);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    editLink.onclick = onClick;
    editLink.onauxclick = onClick;

    document.body.appendChild(editLink);
  })
  .catch((error) => console.error("Error fetching Storybook versions:", error));
