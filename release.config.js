module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/danikrisdayadi/github-actions-test",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github"
    ]
}