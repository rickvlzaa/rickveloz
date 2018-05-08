module.exports = ({host, mode}) => {

    const configPath = `./webpack/${host}/${mode}.js`;

    return require(configPath);
}