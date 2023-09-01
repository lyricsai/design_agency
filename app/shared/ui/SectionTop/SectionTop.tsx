interface SectionTopProps {
  order?: number;
  title: string;
}

export const SectionTop = ({ order, title }: SectionTopProps) => {
  return (
    <div>
      <h3>
        {order && (
          <>
            <span>{order && order}</span>
            <span> - </span>
          </>
        )}
        <span>{title}</span>
      </h3>
    </div>
  );
};
