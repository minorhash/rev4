USER=admin
PSSD=bulk2010
FTPSITE=tmsmusic.tokyo
dir=/home/admin/exp/biz/rev4
ldir=/mnt/sdb3/exp/biz/rev4

lftp  -u $USER,$PSSD $FTPSITE \
-e "
set ftp:list-options -a
lcd $ldir
lpwd
cd $dir
pwd
"

