import React, {useState, FC} from 'react'
import {Menu, Transition} from '@headlessui/react'
import '../css/elsa.css'
import {Activity} from "../models"

export interface ActivityViewProps {
    model: Activity
}

export const ActivityView: FC<ActivityViewProps> = ({model, ...props}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div id={`activity-${model.activityId}`}
             className="activity border-2 border-solid border-white rounded bg-white text-left text-black text-lg hover:border-blue-600 select-none  max-w-md shadow-sm relative">
            <div className="p-5 border-b border-b-solid">
                <div className="flex justify-between space-x-8">
                    <div className="flex-shrink-0">
                        <svg className="h-10 w-10 text-blue-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <circle cx="12" cy="12" r="9"/>
                            <polyline points="12 7 12 12 15 15"/>
                        </svg>
                    </div>
                    <div className="flex-1 font-medium leading-8">
                        <p>{model.type}</p>
                    </div>
                    <div className="flex-shrink-0">
                        <Menu>
                            {({open}) => (
                                <>
                                    <Menu.Button
                                        className="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150">
                                        <svg className="h-6 w-6 text-gray-400" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"/>
                                            <circle cx="5" cy="12" r="1"/>
                                            <circle cx="12" cy="12" r="1"/>
                                            <circle cx="19" cy="12" r="1"/>
                                        </svg>
                                    </Menu.Button>
                                    <Transition
                                        show={open}
                                        enter="transition-opacity duration-75"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="transition-opacity duration-150"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Menu.Items className="z-10 mx-3 origin-top-left absolute -right-48 top-3 w-48 mt-1 rounded-md shadow-lg focus outline-none">
                                            <div className="rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="pinned-project-options-menu-0">
                                                <Menu.Item>
                                                    <div className="py-1">
                                                        <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Edit</a>
                                                    </div>
                                                </Menu.Item>
                                                <div className="border-t border-gray-100"/>
                                                <Menu.Item>
                                                    <div className="py-1">
                                                        <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Delete</a>
                                                    </div>
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </>
                            )}

                        </Menu>

                        {/*<button*/}
                        {/*    onClick={() => setIsOpen(!isOpen)}*/}
                        {/*    aria-haspopup="true" className="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150">*/}
                        {/*    <svg className="h-6 w-6 text-gray-400" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">*/}
                        {/*        <path stroke="none" d="M0 0h24v24H0z"/>*/}
                        {/*        <circle cx="5" cy="12" r="1"/>*/}
                        {/*        <circle cx="12" cy="12" r="1"/>*/}
                        {/*        <circle cx="19" cy="12" r="1"/>*/}
                        {/*    </svg>*/}
                        {/*</button>*/}
                        {/*<Transition*/}
                        {/*    show={isOpen}*/}
                        {/*    enter="transition-opacity duration-75"*/}
                        {/*    enterFrom="opacity-0"*/}
                        {/*    enterTo="opacity-100"*/}
                        {/*    leave="transition-opacity duration-150"*/}
                        {/*    leaveFrom="opacity-100"*/}
                        {/*    leaveTo="opacity-0"*/}
                        {/*>*/}
                        {/*    <div className="z-10 mx-3 origin-top-left absolute -right-48 top-3 w-48 mt-1 rounded-md shadow-lg">*/}
                        {/*        <div className="rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="pinned-project-options-menu-0">*/}
                        {/*            <div className="py-1">*/}
                        {/*                <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Edit</a>*/}
                        {/*            </div>*/}
                        {/*            <div className="border-t border-gray-100"/>*/}
                        {/*            <div className="py-1">*/}
                        {/*                <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">*/}
                        {/*                    Removed*/}
                        {/*                    from pinned*/}
                        {/*                </a>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</Transition>*/}
                    </div>
                </div>

            </div>
            <div className="p-6 text-gray-400 text-sm">
                Every <a href="#" className="font-medium border-b border-solid border-gray-200 text-black">5 minutes</a>
            </div>
        </div>
    )
};