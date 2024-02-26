/**
 * Update : 2023/12/07 19:37:30
 *
 * 1. 功能：为 SYN 已订阅用户快速在 SubStore 中添加低倍率节点；
 * 2. 感谢 @baixiaofei233 提供的思路；
 * 3. 请在 SubStore 中使用，具体使用：编辑->脚本操作->类型（链接）->
 * 填入本脚本链接（https://github.com/Aurora-20/PublicConfig/raw/main/SubStore/Operator.js）；
 * 
 * 修改原脚本,在最后添加低倍率节点
 * https://mirror.ghproxy.com/https://raw.githubusercontent.com/it-glen/Rules/master/js/Operator.js
 */

function operator(proxies) {
  // 添加 🇭🇰 HK 丁香酰氧胺 0.01x
  proxies.push(
    Object.assign({}, proxies[0], {
      server: "traffic-in-lite.811920.xyz",
      port: 50013,
      name: "🇭🇰 HK 丁香酰氧胺 0.01x",
    })
  );

  // 添加 🇸🇬 SG 苯巴比妥钠 0.01x
  proxies.push(
    Object.assign({}, proxies[0], {
      server: "traffic-in-lite.811920.xyz",
      port: 50012,
      name: "🇸🇬 SG 苯巴比妥钠 0.01x",
    })
  );

  // 添加 🇱🇺 LU 硝酸二甲酯 0.01x
  proxies.push(
    Object.assign({}, proxies[0], {
      server: "traffic-in-lite.811920.xyz",
      port: 50009,
      name: "🇱🇺 LU 硝酸二甲酯 0.01x",
    })
  );
  return proxies;
}
