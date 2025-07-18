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
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    background: #F0F0F0;
    transition: .15s ease;
  }

  .${EDIT_ITEM_CLASS}:hover {
    background: #e6e6e6;
  }

  .${EDIT_ITEM_CLASS}:active {
    filter: brightness(96%);
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

    editLink.onclick = async () => {
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

    document.body.appendChild(editLink);
  })
  .catch((error) => console.error("Error fetching Storybook versions:", error));
