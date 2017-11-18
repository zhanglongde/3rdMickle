# 注意该文件的命名不能为webbrowser.py
# You named your file webbrowser.py. It shadows the real webbrowser module and imports itself.
import webbrowser
webbrowser.open('http://baidu.com/')