
lftp -uadmin,bulk2010 tmsmusic.tokyo \
-e "
cd /home/admin/exp/biz/rev4/public
lcd /mnt/sdb3/exp/biz/rev4/public
mirror img
"
