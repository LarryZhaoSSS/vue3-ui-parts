rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:LarryKameZhao/vue3-components.git &&
git push -f -u origin master &&
cd -
echo https://larrykamezhao.github.io/vue3-components/#/doc/tabs