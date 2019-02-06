se1=$(echo $1|sed s/.scss//g|sed s/scss\\///g)

echo $1
echo css/$se1.css

sass $1 css/$se1.css
