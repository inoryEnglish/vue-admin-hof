import { defineComponent } from "vue";
import { ElScrollbar, useNamespace } from "element-plus";
import "./BaseLayout.scss";
import BaseHeader from "./BaseHeader.vue";
import BaseFooter from "./BaseFooter.vue";
import BaseNav from "./BaseNav.vue";
import BaseTabsMenu from "./BaseTabsMenu.vue";
import { useConfigStoreWithOut } from "@/stores/modules/config";
import { ContextMenu } from "@/components/ContextMenu";

const configStore = useConfigStoreWithOut();
const ns = useNamespace("base-layout");
export default defineComponent({
  name: "BaseLayout",
  setup(props, context) {
    const { slots } = context;
    return () => (
      <>
        {/*<ContextMenu />*/}
        <main class={[ns.b()]}>
          <article
            class={[
              ns.e("left"),
              configStore.menuCollapse ? "w-64px" : "w-200px",
            ]}
          >
            <ElScrollbar>
              <BaseNav />
            </ElScrollbar>
          </article>

          <article class={[ns.e("right"), "overflow-hidden"]}>
            <BaseHeader />

            <BaseTabsMenu />

            <div class={[ns.em("right", "main")]}>
              <ElScrollbar>
                {slots["default"] && slots["default"]()}
              </ElScrollbar>
            </div>

            <BaseFooter />
          </article>
        </main>
      </>
    );
  },
});
