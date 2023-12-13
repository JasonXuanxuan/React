json-server是一款 json 数据服务器，它运行 Express 服务器，可以对json文件、js脚本生成的json数据、远程json数据进行restful风格的增删改查操作，通过指定一个json文件作为api数据源，可以进行分页、排序、关联查询、范围查询等各种查询操作，是一套完整的模拟 REST API 接口

第一步：安装json-server
npm i json-server -g
第二步：填入示例数据
在你的项目目录新建一个db.json文件夹，并在json文件中填入示例数据
第三步：进入项目目录，打开终端输入 json-server --watch db.json
json-server --watch data/db.json --port 3500