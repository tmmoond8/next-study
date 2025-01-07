import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"], // TypeScript 파일에만 적용
    rules: {
      "@typescript-eslint/no-empty-interface": "off", // 규칙 비활성화
      "@typescript-eslint/no-unused-vars": "off", // 규칙 비활성화
      "@typescript-eslint/no-explicit-any": "off",
      "react/jsx-key": "off",
      "@typescript-eslint/ban-types": [
        "error",
        {
          types: {
            "{}": false, // `{}` 타입 사용 경고 비활성화
          },
          extendDefaults: true,
        },
      ],
    },
  },
];

export default eslintConfig;
