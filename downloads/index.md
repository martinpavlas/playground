# Exampe of downloads

This is an example how to add downloads buttons and links.
The files to be downloaded needs to be placed to
`/public/downloads/` folder.

## Some documents

a few documents to donwload.

### A button style download

click the button to download a pdf file

<DownloadButton
  href="/downloads/mydoc.pdf"
  description="A pdf document with some info"
/>

### A link style download

And anothor download link

<DownloadLink
  filename="mydoc.zip"
  href="mydoc.zip"
  description="A compressed version of the mydoc.pdf"
/>
