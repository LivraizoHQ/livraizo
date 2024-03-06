"use client"

import { Box, Surface, Text, Divider } from "@axazara/raiton-atoms"
import { Facebookv2Fill } from "@axazara/raiton-icons"

export default function Footer() {
    return (
        <Box className="md:block hidden">
            <Box className="bg-dark">
                <Box className="max-w-6xl mx-auto flex justify-between items-center pt-16">
                    <Surface className="bg-white w-64 h-16" />
                    <Box className="flex text-white text-heading-05-sm-semibold space-x-10">
                        <Text>
                            A propos
                        </Text>
                        <Text>
                            Blog
                        </Text>
                    </Box>
                    <Box className="flex space-x-8">
                        <Facebookv2Fill className="w-6 h-6 text-white" />
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3263 1.90393H21.6998L14.3297 10.3274L23 21.7899H16.2112L10.894 14.838L4.80995 21.7899H1.43443L9.31743 12.78L1 1.90393H7.96111L12.7674 8.25826L18.3263 1.90393ZM17.1423 19.7707H19.0116L6.94539 3.81706H4.93946L17.1423 19.7707Z" fill="white" />
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.0725 0H13.0278V16.3478C13.0278 18.2957 11.4722 19.8957 9.53626 19.8957C7.60034 19.8957 6.04469 18.2957 6.04469 16.3478C6.04469 14.4348 7.56577 12.8695 9.43257 12.8V8.69567C5.31872 8.7652 2 12.1391 2 16.3478C2 20.5913 5.38786 24 9.57085 24C13.7538 24 17.1416 20.5565 17.1416 16.3478V7.9652C18.6627 9.07827 20.5295 9.73913 22.5 9.77393V5.66957C19.4579 5.56522 17.0725 3.06087 17.0725 0Z" fill="white" />
                        </svg>

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 24L1.687 17.837C0.646 16.033 0.099 13.988 0.1 11.891C0.103 5.335 5.438 0 11.993 0C15.174 0.001 18.16 1.24 20.406 3.488C22.651 5.736 23.887 8.724 23.886 11.902C23.883 18.459 18.548 23.794 11.993 23.794C10.003 23.793 8.042 23.294 6.305 22.346L0 24ZM6.597 20.193C8.273 21.188 9.873 21.784 11.989 21.785C17.437 21.785 21.875 17.351 21.878 11.9C21.88 6.438 17.463 2.01 11.997 2.008C6.545 2.008 2.11 6.442 2.108 11.892C2.107 14.117 2.759 15.783 3.854 17.526L2.855 21.174L6.597 20.193ZM17.984 14.729C17.91 14.605 17.712 14.531 17.414 14.382C17.117 14.233 15.656 13.514 15.383 13.415C15.111 13.316 14.913 13.266 14.714 13.564C14.516 13.861 13.946 14.531 13.773 14.729C13.6 14.927 13.426 14.952 13.129 14.803C12.832 14.654 11.874 14.341 10.739 13.328C9.856 12.54 9.259 11.567 9.086 11.269C8.913 10.972 9.068 10.811 9.216 10.663C9.35 10.53 9.513 10.316 9.662 10.142C9.813 9.97 9.862 9.846 9.962 9.647C10.061 9.449 10.012 9.275 9.937 9.126C9.862 8.978 9.268 7.515 9.021 6.92C8.779 6.341 8.534 6.419 8.352 6.41L7.782 6.4C7.584 6.4 7.262 6.474 6.99 6.772C6.718 7.07 5.95 7.788 5.95 9.251C5.95 10.714 7.015 12.127 7.163 12.325C7.312 12.523 9.258 15.525 12.239 16.812C12.948 17.118 13.502 17.301 13.933 17.438C14.645 17.664 15.293 17.632 15.805 17.556C16.376 17.471 17.563 16.837 17.811 16.143C18.059 15.448 18.059 14.853 17.984 14.729Z" fill="white" />
                        </svg>
                    </Box>
                </Box>
                <Divider className="text-white mt-6 pb-8 max-w-6xl mx-auto" />
                <Box className="flex justify-between max-w-6xl mx-auto pb-14">
                    <Text className="text-[#A1A1A1]">
                        © 2023 Livraizo, all rights reserved.
                    </Text>
                    <Box className="text-[#A1A1A1] flex space-x-6">
                        <Text component='a' href='#'>
                            Privacy
                        </Text>
                        <Text component='a' href='#'>
                            Terms
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )

}