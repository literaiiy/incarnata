// https://tailwindui.com/components/application-ui/navigation/navbars

import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import {parseCookies} from "nookies";

const navigation = [
  { name: 'Current', href: '/current'}
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const cookies = parseCookies();

  const [userPicture, setUserPicture] = useState('https://cdn.mkn.cx/myspotify/dev/profile.png');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let picture = localStorage.getItem("ms-user-img");
    if (picture)
      setUserPicture(picture);
    if ({ cookies }.cookies['ms-user-code'])
      setLoggedIn(true);
  }, []);

  return (
    <div></div>
  )
}