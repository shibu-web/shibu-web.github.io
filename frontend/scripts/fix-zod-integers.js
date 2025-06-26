import fs from 'fs';
import { glob } from 'glob';

// globの戻り値は非同期になるため、async/awaitを使用
const main = async () => {
  // Zodファイルを再帰的に検索（globSyncではなくglobを使用）
  const zodFiles = await glob('./src/api/**/*.zod.ts');

  zodFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // number().min(1)でかつdescribeに「自然数」を含む場合のみマッチするパターン
    const pattern = {
      regex: /zod\.number\(\)\.min\(1\)\.describe\('([^']*自然数[^']*)'\)/g,
      replacement: 'zod.number().int().min(1).describe(\'$1\')'
    };

    // 置換を実行
    content = content.replace(pattern.regex, pattern.replacement);

    // 修正した内容を書き戻す
    fs.writeFileSync(file, content, 'utf8');
    console.log(`🔄 修正しました: ${file}`);
  });

  console.log('✅ すべてのZodファイルの整数型を修正しました');
};

main().catch(console.error);