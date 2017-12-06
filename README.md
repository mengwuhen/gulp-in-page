# gulp-in-page
gulp 在项目中的应用</br>
Q1：在第一次提交时，因为对.gitignore文件的配置不是特别清楚，一次造成了将node_modules文件以及dist文件push到远成仓库。后来发现当修改gitignore文件后，远程仓库依然
添加'/dist' '/node_modules'依然不起作用，经过查看资料，发现是缓存的原因。</br>
R1: clone远成仓库到本地并进入本地文件，执行git命令'git rm -r --cached .'; 'git add .';'git commit -m '修改gitignore文件''; 然后推送远程仓库，问题解决。
