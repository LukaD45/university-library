"use client";

import config from "@/lib/config";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import { useRef, useState } from "react";

const {
  env: {
    imageKit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Request failed with status: ${response.status} - ${errorText}`
      );
    }
    const data = await response.json();
    const { signature, expire, token } = data;

    return { token, expire, signature };
  } catch (error: any) {
    throw new Error(`Failed to authenticate with ImageKit: ${error.message}`);
  }
};

const ImageUpload = () => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{
    filePath: string;
  } | null>(null);

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload className="hidden" ref={ikUploadRef} />
    </ImageKitProvider>
  );
};

export default ImageUpload;
