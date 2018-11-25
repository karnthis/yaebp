# README
## About
This started as a small project for myself because I found I was doing the same several setup steps each time I started a new project that required an API. Hopefully others find it useful. Please open issues with problems you find, or reach out to me with feedback/questions.

## Requirements
* [Git bash]
* An internet connection
* Nodejs
* npm
## Getting Started
* `git clone https://github.com/karnthis/yaebp.git`

### Easy Mode
#### Directions
1. Start a Git Bash session in the new folder
1. Pick one:
	* `./setup.sh`
	* `npm run setup`
1. That's it! Thanks for using YAEBP

### Hard Mode
#### Shell
* `mv sample.env .env`
* `mv sample.CHANGELOG.md CHANGELOG.md`
* `mv sample.README.md README.md`
* `mv sample.package.json package.json`
* `rm setup.sh`
* `git remote remove origin`
* `npm install`
* `git add .`
* `git commit -m "manual setup commit"`

### Post-setup Steps
* Populate .env (must have at least a mongo host set)
* git remote add *NAME* *REMOTE-URL* (if desired)
* Update fields in package.json:
	* name
	* description
	* version
	* keywords
	* author
* Start work

<!-- LINKS -->
[Git bash]: https://git-scm.com/downloads