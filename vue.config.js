/**
 * @version: v0.0.1
 * @Author: hailong.chen
 * @Date: 2020-03-01 10:22:36
 * @LastEditors: hailong.chen
 * @LastEditTime: 2020-03-01 11:02:40
 * @Descripttion:
 */
module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'com.hailong.fhl',
        productName: '风火轮',
        icon: './app.png',
        files: ['**/*', 'static/*'],
        asar: true,
        mac: {
          icon: './app.png',
          target: ['zip', 'dmg'],
        },
        win: {
          icon: './app.png',
          target: ['zip', 'nsis'],
        },
        nsis: {
          oneClick: false,
          allowElevation: true,
          allowToChangeInstallationDirectory: true,
          installerIcon: './app.png',
          uninstallerIcon: './app.png',
          installerHeaderIcon: './app.png',
          createDesktopShortcut: true,
          createStartMenuShortcut: true,
          license: './LICENSE.txt',
        },
      },
    },
  },
};
