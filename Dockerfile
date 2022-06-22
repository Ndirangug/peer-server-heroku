FROM node:alpine
RUN mkdir /peer-server
WORKDIR /peer-server
COPY bin ./bin
COPY dist ./dist
COPY package.json .
RUN npm install --production
EXPOSE 9000
ENTRYPOINT ["node", "bin/peerjs"]
CMD [ "--port", "$PORT", "--path", "/" ]
CMD /bin/bash -c "node bin/peerjs --port '\$PORT' --path /"
