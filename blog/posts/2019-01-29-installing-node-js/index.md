---
path: "/blog/installing-node-js"
date: '2019-01-24'
title: "Getting started with Node.js - Beginner's Guide"
author: "haxzie"
tags: ["welcome", "blog", "article"]
cover: ""
featured: false
read_time: "5"
---
Node.js is an open source server-side development framework. It is one of the best and the fastest growing solution for server-side development with a huge community support. Node.js was originally written and developed by <a href="https://twitter.com/ryanmdahl" target="_blank" rel="noopener">Ryan Dhal</a> in 2009. Since then there was a huge improvement and development by the open source community and is distributed by the <a href="https://nodejs.org" target="_blank" rel="noopener">Node.js Foundation</a>, which is facilitated by the Linux Foundation's collaborative project program.
<h2>What is Node.js?</h2>
<p>Since the development and wide acceptance of JavaScript as a client-side scripting language, it's been known good only for the same purpose. But things have changed a lot, now JavaScript is everywhere from mobile applications to high-end miners and GPU intensive game development. <strong>Node.js</strong> is an open source, cross-platform JavaScript run-time environment for executing JavaScript on server-side. Node.js is built on Chrome's V8 JavaScript engine. It provides an event-driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript.</p>
<h2>Advantages of Node.js</h2>
<ul>
 	<li>NodeJS is single-threaded and asynchronous. Every I/O operation doesn’t block other operations. It means that you can read files, send emails, query the database, etc… at the same time.</li>
 	<li>Each request to web-server does NOT create a separate NodeJS process. Instead, one NodeJS process is running at all times and listens to connections. JavaScript code is executed in the main thread of this process and all I/O operations are executed in separate threads, meaning almost no delays.</li>
 	<li>Virtual machine in NodeJS (V8) that executes JavaScript has JIT compilation. When the virtual machine takes the source code, it can compile it to machine code at runtime. It means that “hot” functions, that get called very often, can be compiled to machine code, improving execution speed significantly.</li>
 	<li>A single language for the entire stack is always helpful for both beginners and professional developers. A wide range of JavaScript frameworks helps this easier and more fun to work with.</li>
</ul>
<h2>Installation</h2>
<p>Follow the installation guides for</p>
<ul>
 	<li><a href="http://zocada.com/installing-node-js-in-ubuntu-and-other-linux-distros/" target="_blank" rel="noopener">Linux (ubuntu, arch, mint and other distros)</a></li>
 	<li><a href="http://zocada.com/installing-node-js-in-windows-10-and-below/" target="_blank" rel="noopener">Windows 10 and below</a></li>
 	<li><a href="http://zocada.com/installing-node-js-in-apple-macos/" target="_blank" rel="noopener">Apple macOS</a></li>
</ul>