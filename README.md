<h2>To-Do App</h2>

<p>Instructions on how to download the source files and use the App: </p>

<h3>Terminal (Chosen directory to clone the files - Recommended --> Desktop)</h3>

1 - git clone https://github.com/KyoukanPT/todo-app.git

<hr>

<h3>Project Folder Directory (Terminal)</h3>

2 - npm install<br>
3 - node app.js

<hr>

<h3>How to use this App locally (In Your Computer)</h3>
4 - Replace the code in line 7 (app.js) with the following: <strong>mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {useNewUrlParser: true, useUnifiedTopology: true});<br></strong>
5 - Open a new terminal tab and run the following command: <strong>mongod</strong><br>
6 - After you successfully connect to MongoDB, open another new terminal tab and run the following command: <strong>mongo</strong><br><br>

<h3>MongoDB Documentation</h3>
- Installation instructions - <strong> https://docs.mongodb.com/manual/administration/install-community/ </strong> <br>
- How to use mongo shell to query and manipulate the data in your database - <strong>https://docs.mongodb.com/manual/crud/</strong><br><br>

<h3>How to use MongoDB Cloud Database (MongoDB Atlas)</h3>
- Line 7 (app.js) - Replace <strong><"ADMIN"></strong> and <strong><"PASSWORD"></strong> with your Atlas credentials <br>
- Line 7 (app.js) - Replace <strong>/yourDatabaseName</strong> with the name that you want to give to your database <br>
- Follow this Atlas tutorial to learn how to get started - <strong>https://docs.atlas.mongodb.com/getting-started/</strong> <br>

<hr>

<h3>Browser (After step 2 --> step 6 + having MongoDB installed)</h3>
7 - <a href="http://localhost:3000/">http://localhost:3000/</a>

<hr>

<h3>Live App</h3>
https://kyoukanpt-to-do-list.herokuapp.com/
