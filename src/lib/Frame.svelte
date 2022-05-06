<script>
  let content = content
  fetch("https://raw.githubusercontent.com/Astri2/CoursKatex/main/html/MathsS2-ThmOstrogradsky.html").then(response => {return response.text()}.then(response => {content = response })
</script>

{#key content}
  <div>
    {content}
  </div>
{/key}
