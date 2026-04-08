type SchemaProps = {
  id: string;
  data: Record<string, unknown>;
};

export function Schema({ id, data }: SchemaProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
