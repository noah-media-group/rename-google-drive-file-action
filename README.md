# What's it for? 

We needed to rename a Google Drive file during a release, so we created this action

# How to use

`fileId` : The Google Drive id of the file
`fileName` : The name you want that file to have at the end
`credentials` : GCP Credentials that can access the file

```

      - name: Rename master analytics file
        uses: noah-media-group/rename-google-drive-file-action@v1.0.1
        with:
          fileId: ${{ inputs.file-id }}
          fileName: ${{ env.FILE_NAME }}
          credentials: ${{ secrets.gcpCredentials }}

```
