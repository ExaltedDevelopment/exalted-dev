<script lang="ts">
    import type {ImageRecord} from "$lib/server/db/xata";
    import type {JSONData} from "@xata.io/client";

    interface PageData {
        data: JSONData<ImageRecord>[]
    }
    export let data: PageData
    // const pageData: PageData['data'] = data.data
    $: pageData = data.data
</script>

{#each pageData as img}
    <img src="{img.image?.signedUrl}" alt="Image">
    <p>{img?.id}</p>
{/each}