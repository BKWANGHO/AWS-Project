import { PG } from "@/app/components/common/enums/PG";
import Link from "next/link"

interface ILinkButton {
    title: string,
    path: string
}


export default function Linkbutton({ title, path }: ILinkButton) {
    return (
        <li >
            <Link href={`${path}`}
                className="block px-6 py-3 text-lm
      text-gray-700 hover:bg-gray-100
       dark:hover:bg-gray-600 dark:text-gray-200
        dark:hover:text-white">{title}</Link></li>
    )
}


export const pages = [
    // { id: 1, title: '회원가입', path: `${PG.USER}/join` },
    // { id: 2, title: '로그인', path: '/' },
    { id: 3, title: '카운터', path: `${PG.DEMO}/counter` },
    { id: 4, title: '게시판목록', path: `${PG.BOARD}/list` },
    { id: 5, title: '게시글목록', path: `${PG.ARTICLE}/list` },
    { id: 6, title: '사용자목록', path: `${PG.BOARD}/list` }]


export const settings = [
    'Profile', 'Account', 'Dashboard', 'Logout'];