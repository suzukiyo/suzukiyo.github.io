import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-bold text-white">404</h1>
      <p className="text-gray-400">ページが見つかりませんでした。</p>
      <Link to="/" className="text-brand-400 hover:underline">
        トップへ戻る
      </Link>
    </div>
  )
}
