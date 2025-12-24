"use client";
import { useState } from "react";

export default function Home() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [focus, setFocus] = useState("x"); // 入力基準

  const ratios = [
    { name: "Instagram[縦] (4:5)", ratio: 4 / 5 },
    { name: "X[縦] (4:5)", ratio: 4 / 5 },
    { name: "Facebook[縦] (4:5)", ratio: 4 / 5 },
    { name: "LINE[縦・横] (16:9)", ratio: 16 / 9 },
    { name: "TikTok[縦] (9:16)", ratio: 9 / 16 },
    { name: "Threads[縦] (4:5前後)", ratio: 4 / 5 },
    { name: "Youtube[縦] (9:16)", ratio: 9 / 16 },
    { name: "Pinterest[縦] (2:3)", ratio: 2 / 3 },
    { name: "Instagram[横] (1.91:1)", ratio: 1.91 / 1 },
    { name: "X[横] (16:9)", ratio: 16 / 9 },
    { name: "Facebook[横] (1.91:1)", ratio: 1.91 / 1 },
    { name: "TikTok[横] (1:1)", ratio: 1 / 1 },
    { name: "Threads[横] (1.91:1前後)", ratio: 1.91 / 1 },
    { name: "Youtube[横] (16:9)", ratio: 16 / 9 },
    { name: "Pinterest[横] (4:5)", ratio: 4 / 5 },
  ];

  const getResults = () => {
    const val = focus === "x" ? Number(x) : Number(y);
    if (!val) return [];
    return ratios.map(({ name, ratio }) => {
      if (focus === "x") {
        return { name, size: `横 ${val}px : 縦 ${Math.round(val / ratio)}px` };
      } else {
        return { name, size: `縦 ${val}px : 横 ${Math.round(val * ratio)}px` };
      }
    });
  };

  return (
    <main className="flex flex-col items-center p-6">
      <h1 className="text-lg font-bold mb-3">SNS画像・動画アスペクト比計算フォーム (2025/12/25 時点 )</h1>
      <p>各種SNSが推奨するアスペクト比に基づいて計算します。切り抜き時などにご活用ください。</p>
      <div className="flex flex-col gap-4 max-w-xl w-full">
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              checked={focus === "x"}
              onChange={() => setFocus("x")}
            /> 横(X)基準
          </label>
          <label>
            <input
              type="radio"
              checked={focus === "y"}
              onChange={() => setFocus("y")}
            /> 縦(Y)基準
          </label>
        </div>
                {focus === "x" ? (
          <>
            <label>
              横(X):
              <input
                type="number"
                value={x}
                onChange={(e) => setX(e.target.value)}
                className="border mx-2 p-1 w-24"
              />
            </label>
            <label className="text-gray-500">
              <span className="line-through">縦(Y):</span>
            </label>
          </>
        ) : (
          <>
            <label className="text-gray-500">
              <span className="line-through">横(X):</span>
            </label>
            <label>
              縦(Y):
              <input
                type="number"
                value={y}
                onChange={(e) => setY(e.target.value)}
                className="border mx-2 p-1 w-24"
              />
            </label>
          </>
        )}
        <div className="bg-black-300 ">
          <b>計算結果</b>
          <ul>
            {getResults().map((res) => (
              <li key={res.name}>{res.name}: {res.size}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
