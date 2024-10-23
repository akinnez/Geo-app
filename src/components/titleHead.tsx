function TitleHead({ title }: { title: string }) {
  return (
    <h1 className="text-3xl font-semibold italic border-b-4 py-2 border-black/80">
      {title}
    </h1>
  );
}

export default TitleHead;
