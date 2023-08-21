import React from 'react'

function Question() {
  return (
    <div className="container mt-4">
            <h1 className="text-center mb-4">Have any questions?</h1>

            <div className="bg-white mx-auto p-4">
                <div className="mb-4">
                    <div className="bg-light d-flex justify-content-between align-items-center p-2 rounded text-dark font-weight-bold cursor-pointer hover-bg-gray"
                         id="question" >
                        Why do businesses need a logo?
                        <span className="h-6 w-6 d-flex align-items-center justify-content-center text-teal">
                            <svg className="w-3 h-3 fill-current" viewBox="0 -192 469.33333 469"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0"/>
                            </svg>
                        </span>
                    </div>
                    <div className="p-3" id="myDIV">
                        <p className="text-dark mb-3">A logo helps gain recognition. Logos are the first touchpoint with the target audience. A logo sets the look and forms the feel of the brand.</p>
                        <p className="text-dark mb-3">Advantages of a professional design and a powerful logo include:</p>
                        <ul className="text-dark mb-3">
                            <li>Instant recognition</li>
                            <li>Sets you far apart from the competition</li>
                            <li>Higher recall value builds trust</li>
                            <li>Presents a professional image</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="bg-light d-flex justify-content-between align-items-center p-2 rounded text-dark font-weight-bold cursor-pointer hover-bg-gray"
                         id="question" >
                        What are the types of logos you can design?
                        <span className="h-6 w-6 d-flex align-items-center justify-content-center text-teal">
                            <svg className="w-3 h-3 fill-current" viewBox="0 -192 469.33333 469"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0"/>
                            </svg>
                        </span>
                    </div>
                    <div className="p-3" id="myDIV">
                        <p className="text-dark mb-3">We create customized logos. The logo-building exercise works around the client's domain and positioning. We work with various logo styles, including complex logos, minimalist logos, mnemonics, and text-based logos.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question