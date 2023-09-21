module.exports = {
    apps: [
        {
            name: "testServer_node",
            script: './bin/www',
            exec_mode: "cluster",
            instances: 1,
            error_file: "./logs/err.log",
            out_file: "./logs/out.log",
            merge_logs: true,
            log_date_format: "YYYY-MM-DD HH:mm:ss",
            ignore_watch: 'logs',
            env: {
                NODE_ENV: 'production',
                PORT: 4466
            },
			
        }
    ]
}