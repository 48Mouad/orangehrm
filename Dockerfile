FROM mcr.microsoft.com/playwright:v1.52.0
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD ["npx", "playwright", "test"]