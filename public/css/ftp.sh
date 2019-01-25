USER=admin PSSD=bulk2010 FTPSITE=tmsmusic.tokyo
rdir=/home/admin/exp/biz/rev4/public/css
ldir=/mnt/dat/exp/biz/rev4/public/css

lftp -u $USER,$PSSD $FTPSITE \
    -e " set ftp:list-options -a
    lcd $ldir
    lpwd
    cd $rdir
    pwd
    put 3nav.css
    exit "
