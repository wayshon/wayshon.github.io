(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{200:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"ios-sqlite3外键级联删除问题解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-sqlite3外键级联删除问题解决","aria-hidden":"true"}},[e._v("#")]),e._v(" iOS sqlite3外键级联删除问题解决")]),e._v(" "),a("p",[a("code",[e._v("2016-04-08")])]),e._v(" "),a("p",[e._v("最近学习使用数据库，以前上学的时候也学过外键和级联删除。")]),e._v(" "),a("div",{staticClass:"language-Objective-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    NSString *sql=@"CREATE TABLE PlanModel (Id integer,name text,constraint plan_key primary key (Id))";\n    NSString *sql=@"CREATE TABLE SystemModel (Id integer,planId integer,name text,foreign key (planId) references PlanModel(Id) on delete cascade on update cascade,constraint system_key primary key (Id,planId))";\n')])])]),a("p",[e._v("照理说在建表的时候sql语句如上面这段语句就行了，但是经过实验证明关联了外键并没有级联删除，即SystemModel中删除了，本表中关于PlanModel的id对应的纪录并没有删除。经过查阅发现，sqlite支持级联，但默认级联属性是关闭的。")]),e._v(" "),a("div",{staticClass:"language-Objective-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    NSString *foreign=@"PRAGMA foreign_keys=1"\n    [[DBManager sharedDBManager] executeNonQuery:foreign];\n    NSString *sql=[NSString stringWithFormat:@"DELETE FROM PlanModel WHERE Id=\'%@\'",model.Id];\n    [[DBManager sharedDBManager] executeNonQuery:sql];\n')])])]),a("p",[e._v('在执行删除的sql语句前先执行"PRAGMA foreign_keys=1"就可以了。')])])}],!1,null,null,null);t.default=s.exports}}]);