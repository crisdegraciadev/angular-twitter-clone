export type TabStyles = {
  forYou: ItemStyle;
  following: ItemStyle;
};

type ItemStyle = {
  button: 'font-medium' | 'font-normal';
  underline: 'block' | 'hidden';
};
