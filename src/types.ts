import type { ReactNode } from 'react';

export type CardType = 'knowledge' | 'foreplay' | 'position' | 'interaction' | 'tip';

export interface CardData {
  id: string;
  title: string;
  type: CardType;
  description: string;
  content: string; // 详细内容/操作指南
  tips?: string; // 注意事项
  difficulty?: 1 | 2 | 3 | 4 | 5; // 仅针对姿势
  illustration: ReactNode; // SVG 组件
}
