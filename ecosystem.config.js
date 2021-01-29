module.exports = {
    apps : [{
      name: "mtn-zambia-smpp-sms-production",
      script: "./application/index.js",
      autorestart: true,
      exec_mode : "cluster",
      instances: 2,
      env: {
        NODE_ENV: "development",
      },
      watch: false,
      ignore_watch: [
          "./logs",
          "./node_modules"
    ]
    }
    // {
    //     name: "mtn-zambia-smpp-production",
    //     script: "/home/vpn/sms/mtn-zambia-smpp/application/index.js",
    //     env: {
    //       NODE_ENV: "production",
    //     },
    //     watch: true,
    //     ignore_watch: [
    //         "/home/vpn/sms/mtn-zambia-smpp/logs",
    //         "/home/vpn/sms/mtn-zambia-smpp/node_modules"
    //   ]
    //   }
    ]
}
