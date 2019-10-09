module.exports = {
    plugins: {
        'postcss-import': {
            resolve(pathName) {
                return pathName.match(/\.css$/) ? pathName : `${pathName}.css`;
            },
        },
    },
};
