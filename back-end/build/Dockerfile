# goバージョン
FROM golang:1.16.3-alpine
# アップデートとgitのインストール！！
RUN apk add --update &&  apk add git
# appディレクトリの作成
RUN mkdir /go/src/app
#gormの追加
RUN go get github.com/jinzhu/gorm
#sqlDriverの追加
RUN go get github.com/go-sql-driver/mysql
# ワーキングディレクトリの設定
WORKDIR /go/src/app
# ホストのファイルをコンテナの作業ディレクトリに移行
ADD . /go/src/app