<template>

    <div v-if="pager.pages && pager.pages.length" class="d-flex justify-content-between py-3" style="border-top: 2px solid #e0cf97;">
        <!--<li :class="(isPrevious)?'page-item previous':'disabled page-item previous'" :style="liStyles">
            <a class="page-link" @click="setPage(pager.currentPage - 1)" :style="aStyles">{{$t(labels.previous)}}</a>
        </li>-->

        <a v-if="isPrevious"  class="btn btn-outline-primary border-2 px-6"
           @click="setPage(pager.currentPage - 1)">
            <i class="fa fa-arrow-right px-1 " aria-hidden="true"></i>
        {{$t(labels.previous)}}</a>
        <router-link v-if="!isPrevious" :to="{path : '/home'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6">
            <i class="fa fa-home px-1"></i>
            {{$t('infoPage.homeButton')}}

        </router-link>
        <a v-if="isNext"  @click="setPage(pager.currentPage + 1)" :class="(isNext)?'btn btn-outline-primary border-2 px-6':'disabled btn btn-outline-primary border-2 px-6'">{{$t(labels.next)}}
            <i class="fa fa-arrow-left px-1 " aria-hidden="true"></i>
        </a>

        <!--<li :class="(isNext)?'page-item next':'disabled page-item next'" :style="liStyles">
            <a class="page-link" @click="setPage(pager.currentPage + 1)" :style="aStyles">{{$t(labels.next)}}</a>
            <router-link :to="{path : '/home'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6" >{{$t('infoPage.homeButton')}}</router-link>
        </li>-->
    </div>

</template>

<script lang="ts">
    import paginate from 'jw-paginate';
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    const defaultLabels = {
        first: 'First',
        last: 'Last',
        previous: 'infoPage.prevButton',
        next: 'infoPage.nextButton'
    };
    const defaultStyles = {
        ul: {
            margin: 0,
            padding: 0,
            display: 'inline-block'
        },
        li: {
            listStyle: 'none',
            display: 'inline',
            textAlign: 'center'
        },
        a: {
            cursor: 'pointer',
            padding: '6px 12px',
            display: 'block',
            float: 'left'
        }
    };
    @Component
    export default class JwPagination extends Vue {
        @Prop({ required: true }) items!: [];
        @Prop({ default: 1 }) initialPage!: number;
        @Prop({ default: 4 }) pageSize!: number;
        @Prop({ default: 10 }) maxPages!: number;
        @Prop({ default: () => defaultLabels }) labels!: {};
        @Prop() styles!: {};
        @Prop({ default: false }) disableDefaultStyles!: boolean;
        pager!: {}
        ulStyles!: {}
        liStyles!: {}
        aStyles!: {}
        isNext = true;
        isPrevious = true;

        created() {

            if (!this.$listeners.changePage) {
                throw 'Missing required event listener: "changePage"';
            }
            // set default styles unless disabled
            if (!this.disableDefaultStyles) {
                this.ulStyles = defaultStyles.ul;
                this.liStyles = defaultStyles.li;
                this.aStyles = defaultStyles.a;
            }
            // merge custom styles with default styles
            //if (this.styles) {
            //    this.ulStyles = { ...this.ulStyles, ...this.styles.ul };
            //    this.liStyles = { ...this.liStyles, ...this.styles.li };
            //    this.aStyles = { ...this.aStyles, ...this.styles.a };
            //}
            // set to initial page
            this.setPage(this.initialPage);
        }

        setPage(page) {
            // debugger
            const { items, pageSize, maxPages } = this;
            // get new pager object for specified page
            const pager = paginate(items.length, page, pageSize, maxPages);
            // get new page of items from items array
            const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
            // update pager
            this.pager = pager;
            if (pager.currentPage === pager.totalPages) {
                this.isNext = false;
            }
            else
                this.isNext = true;

            if (pager.currentPage === 1) {
                this.isPrevious = false;
            }
            else
                this.isPrevious = true;

            console.log(`pager: `, this.pager);
            // emit change page event to parent component
            this.$emit('changePage', pageOfItems);
        }

        @Watch("items")
        onItemsChange() {
            debugger;
            this.setPage(this.initialPage);
        }

    }
</script>