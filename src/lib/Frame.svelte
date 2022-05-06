<script>
  export let url
  let content = content
  fetch(url).then(response => {return response.text()}).then(response => {content = response })

</script>


{#key content}
  <div>
    {content}
  </div>
{/key}

