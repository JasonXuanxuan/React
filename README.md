# LEARNING NOTE
react+redux+reactrouter

# git配置
git config --global user.name "unique2cxy"
git config --global user.emai
userName和email配置文件: "C:\Users\Lenovo\.gitconfig"
ssh-keygen -t rsa -C ""
ssh位置: "C:\Users\Lenovo\.ssh", 贴到github ssh上
git remote add origin "" 可以添加一个远程仓库
# git使用
git clone '': clone一个git仓库
git fetch origin main: 相当于是从远程获取最新版本到本地，不会自动合并
git pull origin main: 相当于是从远程获取最新版本并merge到本地
git init: 初始化一个git仓库
* git status: 查看文件的状态命令
* git add .: 添加文件到缓存命令
* git commit -m "": 提交命令,以及description
* git push origin main: 
git log: 
git reflog:
git branch: git branch可以查看分支，也可以创建分支，如果没有参数时，git branch会列出你在本地的分支；如果有参数时，git branch就会创建改参数的分支
git branch -vv: 可以查看分支
git branch -d branchname 删除分支
git checkout branchname: 可以切换分支
git reset --hard : 用于取消已缓存的内容