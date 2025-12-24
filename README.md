# aspect-4-sns
https://aspect-4-sns.vercel.app/  
上記URLより使用可能です。

各SNS毎に推奨されている画像や動画の比率が存在します。

| SNS       | 正方形         | 縦長（ポートレート）        | 横長（ランドスケープ）       | 備考                                       |
| --------- | ----------- | ----------------- | ----------------- | ---------------------------------------- |
| Instagram | 1:1         | 4:5               | 1.91:1            | 複数枚（カルーセル）は1:1・4:5・1.91:1に統一されるgithub+1​ |
| X         | 1:1         | 4:5（～4:3程度まで）     | 16:9              | 公式ヘルプは1.91:1～4:5を推奨unique1​              |
| Facebook  | 1:1         | 4:5               | 1.91:1            | 広告もこの3系統が基本ad-flex​                      |
| LINE投稿    | （アイコン等で1:1） | 16:9（タイムライン・VOOM） | 16:9              | 動画・カード系は16:9が前提comnico​                  |
| TikTok    | –           | 9:16              | （1:1・16:9も可だが非推奨） | 縦動画中心で9:16推奨wayin+1​                     |
| Threads   | 1:1程度       | 4:5前後             | 1.91:1前後          | 実運用はInstagramとほぼ同様の比率comnico​            |
| YouTube   | –           | 9:16（Shorts）      | 16:9              | 通常動画・サムネは16:9が標準deliveredsocial+1​       |

なんで？？？
めんどくさい！
でも推奨サイズで作りたい！作らなきゃ！

ということで、サクッと横か縦どちらか一辺を数値で入力すると、各SNS推奨のアスペクト比に基づいたサイズでもう一辺を計算して表示するアプリを作成しました。自分用ですね。
ですが、公開いたしましたので、よろしければご利用ください。


# 使用技術↓↓

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
