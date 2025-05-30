import SortSelect from '@/app/_components/client/SortSelect';

export default function HeaderSection({ selectedTag }: { selectedTag: string }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-bold tracking-tight">
        {selectedTag === '전체' ? '블로그 목록' : `${selectedTag} 관련 글`}
      </h2>
      <SortSelect />
    </div>
  );
}
