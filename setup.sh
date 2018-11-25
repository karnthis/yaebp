echo "Running setup.sh for: expressboilerplate"

mv sample.env .env
mv sample.CHANGELOG.md CHANGELOG.md
mv sample.README.md README.md
mv sample.package.json package.json

git remote remove origin
npm install
git add .
git commit -m "setup auto-commit"

read -p "Done - Press [Enter] key to close"
exit