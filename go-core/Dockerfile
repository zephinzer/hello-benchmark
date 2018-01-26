FROM golang:1.9.3-alpine
WORKDIR /app
COPY . /app
RUN go build
ENTRYPOINT ["./app"]