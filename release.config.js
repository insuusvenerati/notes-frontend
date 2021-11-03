module.exports = {
  branches: ["main", { name: "develop", prerelease: true }],
  repositoryUrl: "https://github.com/insuusvenerati/notes-frontend",
  tagFormat: "${version}",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.MD",
      },
    ],
    "@semantic-release/github",
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    [
      "semantic-release-helm",
      {
        chartPath: "./chart",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.MD", "chart/Chart.yaml"],
        message: "chore(release): ${nextRelease.version} [CI SKIP]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
