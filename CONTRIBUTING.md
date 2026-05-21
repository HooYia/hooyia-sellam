# Contributing to Hooyia Sellam

Welcome to the React workshop project. This repo is a shared learning space, so every contribution should be small, clear, and easy for another teammate to understand.

## Local Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd hooyia-sellam
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173/`.

## Add Your Contributor Profile

The contributors page is generated from:

```text
src/data/contributors.json
```

To make your profile appear on the page, add one object to the JSON array.

Example:

```json
{
  "name": "Your Full Name",
  "githubUsername": "your-github-username",
  "role": "Contributor",
  "favoriteTech": "React"
}
```

Full example with multiple contributors:

```json
[
  {
    "name": "Darael Eri Gaddiel",
    "githubUsername": "EriGaddiel",
    "role": "Host",
    "favoriteTech": "React"
  },
  {
    "name": "Your Full Name",
    "githubUsername": "your-github-username",
    "role": "Contributor",
    "favoriteTech": "JavaScript"
  }
]
```

Important:

- Keep the file valid JSON.
- Add a comma between contributor objects.
- Do not add a comma after the last object.
- Use only your GitHub username, not the full GitHub URL.
- Your avatar is loaded automatically from GitHub using `githubUsername`.

## Branch Workflow

Create a branch before making changes:

```bash
git checkout -b feature/your-name/contributor-profile
```

Use a clear branch name that describes your work.

## Before Opening a Pull Request

Run these checks:

```bash
npm run lint
npm run build
```

If both pass, open a pull request with a short explanation of what you changed.

## Good Contribution Habits

- Keep commits small and descriptive.
- Do not change unrelated files.
- If you edit UI, check it in the browser.
- If you are only adding your profile, only update `src/data/contributors.json`.
- Ask questions when something is unclear. This project is for learning.

